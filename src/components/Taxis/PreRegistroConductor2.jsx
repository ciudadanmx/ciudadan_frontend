import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useRoles } from "../../Contexts/RolesContext.jsx";

const STRAPI_URL = process.env.REACT_APP_STRAPI_URL;

const log = (...args) => console.log("[taxys]", ...args);
const logErr = (...args) => console.error("[taxys]", ...args);

const generarHoras = () => {
  const horas = [];
  for (let t = 9 * 60; t < 18 * 60; t += 20) {
    const h = String(Math.floor(t / 60)).padStart(2, "0");
    const m = String(t % 60).padStart(2, "0");
    horas.push(`${h}:${m}`);
  }
  return horas;
};

const HORAS_BASE = generarHoras();

const PreregistroConductor2 = () => {
  const { userData } = useRoles();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [loadingHoras, setLoadingHoras] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    log("INIT STRAPI_URL:", STRAPI_URL);
    log("INIT userData:", userData);
  }, []);

  useEffect(() => {
    if (!userData) return;
    setNombre(userData.nombre_completo || userData.username || "");
    setTelefono(userData.telefono || "");
  }, [userData]);

  useEffect(() => {
    if (!fecha) return;

    const fetchHoras = async () => {
      setLoadingHoras(true);

      try {
        const start = new Date(`${fecha}T00:00:00`).toISOString();
        const end = new Date(`${fecha}T23:59:59`).toISOString();

        const url = `${STRAPI_URL}/api/agendas?filters[observaciones][$eq]=conductor&filters[fecha_inicio][$gte]=${start}&filters[fecha_inicio][$lte]=${end}`;

        const res = await fetch(url);
        const text = await res.text();

        let json = {};
        try {
          json = JSON.parse(text);
        } catch {}

        if (!res.ok) throw new Error(text);

        const ocupadas = (json?.data || []).map((item) => {
          const d = new Date(item?.attributes?.fecha_inicio);
          return d.toTimeString().slice(0, 5);
        });

        const disponibles = HORAS_BASE.filter((h) => !ocupadas.includes(h));
        setHorasDisponibles(disponibles);
      } catch (err) {
        logErr(err);
        setHorasDisponibles(HORAS_BASE);
      }

      setLoadingHoras(false);
    };

    fetchHoras();
  }, [fecha]);

  const handleSubmit = async () => {
    if (!nombre || !telefono || !fecha || !hora) {
      alert("Completa todos los campos");
      return;
    }

    setLoadingSubmit(true);

    try {
      const fechaISO = new Date(`${fecha}T${hora}:00`).toISOString();

      const res = await fetch(`${STRAPI_URL}/api/agendas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            titulo: `Cita conductor ${nombre}`,
            fecha_inicio: fechaISO,
            ciudad: "CDMX",
            estado: "pendiente",
            observaciones: "conductor",
            descripcion: "Preregistro conductor",
            nombre,
            telefono,
            usuario: userData?.id || null,
          },
        }),
      });

      const text = await res.text();
      if (!res.ok) throw new Error(text);

      alert("✅ Cita agendada correctamente");

      setFecha("");
      setHora("");
      setHorasDisponibles([]);
    } catch (err) {
      logErr(err);
      alert("❌ Error en el proceso");
    }

    setLoadingSubmit(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        pb: 10,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Preregistro Conductor
      </Typography>

      <TextField
        fullWidth
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        type="date"
        fullWidth
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        sx={{ mb: 2 }}
        InputLabelProps={{ shrink: true }}
      />

      {loadingHoras ? (
        <CircularProgress />
      ) : (
        <TextField
          select
          fullWidth
          label="Hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          sx={{ mb: 2 }}
        >
          {horasDisponibles.map((h) => (
            <MenuItem key={h} value={h}>
              {h}
            </MenuItem>
          ))}
        </TextField>
      )}

      <Box sx={{ mt: "auto" }}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={loadingSubmit}
          sx={{
            height: 50,
            bgcolor: "#fff200",
            color: "#000",
            fontWeight: "bold",
            position: "sticky",
            bottom: 10,
          }}
        >
          {loadingSubmit ? "Guardando..." : "Agendar"}
        </Button>
      </Box>
    </Box>
  );
};

export default PreregistroConductor2;