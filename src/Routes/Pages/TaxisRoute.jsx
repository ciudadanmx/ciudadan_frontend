import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRoles } from '../../Contexts/RolesContext.jsx';
import Conductor from '../components/Taxis/Conductor.jsx';
import Pasajero from '../components/Taxis/Pasajero.jsx';
import Invitado from '../components/Taxis/Invitado.jsx'; // Nuevo componente agregado

// Material UI + Framer Motion para el preloader
import { Box, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const TaxisRoute = () => {
  const location = useLocation();
  const { roles, fetchRolesYMembresia } = useRoles();

  console.log('🔹 Roles recibidos en TaxisRoute:', roles);

  // Obtenemos un array de roles, ya sea que "roles" sea un array o un objeto con la propiedad "roles"
  const actualRoles = Array.isArray(roles) ? roles : roles?.roles || [];

  const [activeTab, setActiveTab] = useState('');
  const [showTabs, setShowTabs] = useState(false);
  const [HideTabs, setHideTabs] = useState(false); // Estado para ocultar las tabs
  const [shiftToPasajero, setShiftToPasajero] = useState(false);

  console.log('🔹 Estado inicial de activeTab:', activeTab);

  const routeRepeat = location.state?.routeRepeat + 1 || 1;
  //let routeRepeatActualizado = routeRepeat;

  useEffect(() => {
    console.log('🌀 Ejecutando useEffect en TaxisRoute...');
    
    if (actualRoles.length === 1 && actualRoles[0] === 'invitado') {
      console.log('🔄 Cargando roles desde el servidor...');
      fetchRolesYMembresia();
    }

    if (routeRepeat % 2 === 0) {
      setShowTabs(true);
    } else {
      setShowTabs(false);
    }

    if (shiftToPasajero === true) {
        setShowTabs(!showTabs)
    }

    console.log('🟠 Roles actuales:', actualRoles);
    console.log('🟠 ¿Roles incluye "conductor"?', actualRoles.includes("conductor"));

    if (actualRoles.length > 0) {
      const newActiveTab = actualRoles.includes("conductor") ? 'conductor' : 'pasajero';
      console.log('✅ Nuevo valor de activeTab:', newActiveTab);
      setActiveTab(newActiveTab);
    }
  }, [routeRepeat, roles]);

  // --- Corregido: preloader sólo cuando realmente NO tenemos ninguna respuesta ---
  const isRolesLoading = (() => {
    // Si roles === undefined -> aún no llegó nada (loading)
    if (roles === undefined) return true;

    // Si roles === null -> Strapi respondió y puso null -> no estamos en loading (mostrar Invitado)
    if (roles === null) return false;

    // Si roles es un array (ej: fetch devolvió array) -> consideramos que ya llegó la info
    if (Array.isArray(roles)) {
      // Si quieres tratar array vacío como loading cambia esto, pero por ahora lo consideramos respuesta válida
      return false;
    }

    // Si roles es objeto: revisar la propiedad roles
    if (typeof roles === 'object') {
      // Si no tiene la propiedad 'roles' -> posible estado intermedio (seguir esperando)
      if (!('roles' in roles)) return true;

      // Si roles.roles === undefined -> todavía no sabemos
      if (roles.roles === undefined) return true;

      // Si roles.roles === null -> Strapi devolvió null explícito -> no es loading
      if (roles.roles === null) return false;

      // Si es array (vacío o con items) -> ya tenemos respuesta
      if (Array.isArray(roles.roles)) return false;
    }

    // Por defecto: no loading
    return false;
  })();

  if (isRolesLoading) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <CircularProgress size={56} />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Verificando permisos...
          </Typography>
        </motion.div>
      </Box>
    );
  }

  // Si el usuario no está autenticado o no tiene los roles "pasajero" o "conductor", mostrar <Invitado />
  if (!actualRoles.includes("conductor") && !actualRoles.includes("pasajero")) {
    return <Invitado />;
  }

  return (
    <div style={{ width: '90%', height: '100vh', overflow: 'visible', padding: '20px' }}>
      {/* Mostrar tabs solo si showTabs es true y HideTabs es false */}
      {actualRoles.includes("conductor") && showTabs && !HideTabs && (
        <div style={{ display: 'flex', borderBottom: '2px solid #ccc', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('pasajero')}
            style={{ flex: 1, padding: '10px', cursor: 'pointer', background: activeTab === 'pasajero' ? '#fff200' : '#fff' }}
          >
            Pasajero
          </button>
          <button
            onClick={() => setActiveTab('conductor')}
            style={{ flex: 1, padding: '10px', cursor: 'pointer', background: activeTab === 'conductor' ? '#fff200' : '#fff' }}
          >
            Conductor
          </button>
        </div>
      )}

      {actualRoles.includes("conductor") ? (
        activeTab === 'pasajero' ? <Pasajero setHideTabs={setHideTabs}
        setShowTabs={setShowTabs}
        showTabs={showTabs}
        hideTabs={HideTabs}
        setActiveTab={setActiveTab} /> : <Conductor
         setHideTabs={setHideTabs}
         setShowTabs={setShowTabs}
         showTabs={showTabs}
         hideTabs={HideTabs}
         setActiveTab={setActiveTab}
         shiftToPasajero={shiftToPasajero}
         setShiftToPasajero={setShiftToPasajero}
         />
      ) : (
        <Pasajero />
      )}
    </div>
  );
};

export default TaxisRoute;
