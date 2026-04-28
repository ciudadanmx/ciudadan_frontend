// src/routes/Rutas.jsx
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Probador from '../components/Testers/Probador.jsx';

// ---------- Páginas principales ----------
import HomeRoute from '../Pages/HomeRoute.jsx';
import GanaRoute from '../Pages/GanaRoute.jsx';
import TaxisRoute from '../Pages/TaxisRoute.jsx';
import RestaurantesRoute from '../Pages/RestaurantesRoute.jsx';
import MarketRoute from '../Pages/MarketRoute.jsx';
import Rompecabezas from '../components/Academia/Rompecabezas.jsx';
import ComunidadRoute from '../Pages/ComunidadRoute.jsx';
import GenRoute from '../Pages/GenRoute.jsx';
import OpWalletRoute from '../Pages/OpWalletRoute.jsx';
import CallbackPage from '../Pages/CallbackPage.jsx';
import RegistroPasajero from '../Pages/RegistroPasajero.jsx';
import RegistroConductor from '../Pages/RegistroConductor.jsx';
import PreRegistroConductor from '../Pages/PreRegistroConductor.jsx';
//import Clubs from '../Pages/Clubs.jsx';
import Membresias from '../Pages/Membresias.jsx';
import MiMembresia from '../Pages/MiMembresia.jsx';
import MarketPlace from '../Pages/MarketPlace/MarketPlace.jsx';
import ProductosPage from '../Pages/MarketPlace/ProductosPage.jsx';
import CursosPage from '../Pages/Cursos/Cursos.jsx';
import Curso from '../Pages/Cursos/Curso.jsx';
import ContenidosPage from '../Pages/Blog/Contenidos.jsx';
import Contenido from '../Pages/Blog/Contenido.jsx';
import AgregarCurso from '../Pages/Blog/AgregarCurso.jsx';
import EditarContenido from '../Pages/Blog/EditarContenido.jsx';
import EliminarContenido from '../Pages/Blog/EliminarContenido.jsx';
import EditarCurso from '../Pages/Cursos/EditarCurso.jsx';
import EliminarCurso from '../Pages/Cursos/EliminarCurso.jsx';
//import Wiki from '../Pages/Wiki.jsx'; // si lo usas en algún lado
import WikiViewer from '../components/Wiki/WikiViewer.jsx';
import WikiHome from '../Pages/Wiki/WikiHome.jsx';

// ---------- Componentes / Pages adicionales ----------
import Perfil from '../components/Usuarios/Perfil.jsx';
import Favoritos from '../components/Usuarios/Favoritos.jsx';
import Food from '../Pages/Food/Food.jsx';
import AgregarTarea from '../Pages/Coowork/AgregarTarea.jsx';

import NavBar from '../components/NavBar/NavBar.jsx';
import RequisitosConductor from '../components/Taxis/RequisitosConductor.jsx';
import Academia from '../components/Taxis/Academia/Academia.jsx';
import LmAi from '../components/Asistente/LmAi.jsx';
import TTS from '../components/Tts.jsx';
import TextToSpeech from '../components/TextToSpeech.jsx';
import StripeSuccessRedirect from '../components/StripeSuccessRedirect.jsx';
import AgregarClubWrapper from '../components/Clubs/AgregarClubWrapper.jsx';

import RegistroTienda from '../Pages/MarketPlace/RegistroTienda.jsx';
import AgregarProducto from '../Pages/MarketPlace/AgregarProducto.jsx';
import Tienda from '../Pages/MarketPlace/Tienda.jsx';
import Producto from '../Pages/MarketPlace/Producto.jsx';
import MiUbicacion from '../components/MiUbicacion.jsx';
import Carrito from '../Pages/MarketPlace/Carrito.jsx';
import MisProductos from '../Pages/MarketPlace/MisProductos.jsx';
import PedidosEntregados from '../Pages/MarketPlace/PedidosEntregados.jsx';
import PagosTienda from '../Pages/MarketPlace/PagosTienda.jsx';
import ConfiguracionTienda from '../Pages/MarketPlace/ConfiguracionTienda.jsx';
import EliminarProducto from '../Pages/MarketPlace/EliminarProducto.jsx';

import QuienesSomos from '../Pages/Info/QuienesSomos.jsx';
import PreguntasFrecuentes from '../Pages/Info/PreguntasFrecuentes.jsx';
import EventosPage from '../components/Eventos/index.jsx';
import Evento from '../Pages/Eventos/Evento.jsx';
import CrearEvento from '../Pages/Eventos/CrearEvento.jsx';
import AdminDashboard from '../Pages/Admin/AdminDashboard.jsx';
import RootDashboard from '../Pages/Admin/RootDashboard.jsx';
import LegalPage from '../Pages/Legal/LegalPage.jsx';
import Prueba from '../Pages/Prueba.jsx';

import TestConsumoResponsable from '../Pages/Herramientas/TestConsumoResponsable.jsx';
import HerramientasPage from '../Pages/Herramientas/HerramientasPage.jsx';
import Juegos from '../Pages/Herramientas/Juegos.jsx';
import JuegoStatic from '../Pages/Herramientas/JuegoStatic.jsx';
import KitAutoCultivo from '../Pages/Herramientas/KitAutoCultivo.jsx';
import Maria from '../Pages/Herramientas/Maria.jsx';

// Cartera / Coowork / Academia
import ITokens from '../Pages/Cartera/ITokens.jsx';
import Catalogo from '../Pages/Cartera/FreeBoocks/Catalogo.jsx';
import Coowork from '../Pages/Coowork/Coowork.jsx';
import Agencia from '../Pages/Coowork/Agencia.jsx';

// Taxis (pasajero / conductor / trip)
import Pasajero from '../components/Taxis/Pasajero.jsx';
import Conductor from '../components/Taxis/ConductorDebug.jsx';
import TripView from '../components/Taxis/TripView.jsx';

// Clubs / Club actions
import MiClub from '../Pages/Clubs/MiClub.jsx';
import RequisitosJardinero from '../Pages/Clubs/RequisitosJardinero.jsx';
import TiposClubs from '../Pages/Clubs/TiposClubs.jsx';
import Sembrar from '../components/Clubs/ClubActions/Sembrar.jsx';
import IngresarSemillas from '../components/Clubs/ClubActions/IngresarSemillas.jsx';
import GestionClub from '../components/Clubs/GestionClub.jsx';
import Club from '../Pages/Clubs/Club.jsx';
import QrScanner from '../components/Clubs/QrScanner.jsx';
import EscribirBitacora from '../Pages/Clubs/EscribirBitacora.jsx';
import RegistroBitacora from '../Pages/Clubs/RegistroBitacora.jsx';
import EditarRegistroBitacora from '../Pages/Clubs/EditarRegistroBitacora.jsx';
import ClubCreado from '../components/Clubs/steps/ClubCreado.jsx';
import AfiliarseClubCultivo from '../Pages/Clubs/AfiliarseClubClultivo.jsx';

// Membresías extras
import MembershipCheckout from '../components/Membresias/MembershipCheckout.jsx';
import ProbarMembresia from '../components/Membresias/ProbarMembresia.jsx';
import NumeroPlantas from '../components/Membresias/NumeroPlantas.jsx';
import ActivaTuMembresia from '../components/Membresias/ActivaTuMembresia.jsx';
import Humo from '../components/Membresias/Humo/Humo.jsx';

// Anuncios / Comunidad
import Anuncios from '../Pages/Anuncios/Anuncios.jsx';
import ComunidadPage from '../Pages/ComunidadPage.jsx';
import Referir from '../Pages/Comunidad/Referir.jsx';

// Contenidos / Blog
//import ContenidosPage from '../Pages/Blog/Contenidos.jsx';
import AgregarContenido from '../Pages/Blog/AgregarContenido.jsx';
//import EditarContenido from '../Pages/Blog/EditarContenido.jsx';
//import EliminarContenido from '../Pages/Blog/EliminarContenido.jsx';

// Notificaciones / Testers
import NotificationTester from '../components/Testers/NotificationTester.jsx';
import AllNotificaciones from '../Pages/Notificacions.jsx';
import Notificacion from '../Pages/Notificacion.jsx';

// Misc
import PreCargador from '../components/PreCargador.jsx';
import RegistroTiendaPage from '../Pages/MarketPlace/RegistroTienda.jsx';
import ReferirAlias from '../Pages/Comunidad/Referir.jsx';

import FinalizarCompra from '../Pages/MarketPlace/FinalizarCompra.jsx';
import GeneradorAmparo from '../Pages/Legal/GeneradorAmparo.jsx';
import GeneradorEscritoLibre from '../Pages/Legal/GeneradorEscritoLibre.jsx';
import Amparo from '../Pages/Legal/Amparo.jsx';
import GeneradorActaYEstatutos from '../Pages/Legal/GeneradorActaYEstatutos.jsx';
import InstruccionesActa from '../Pages/Legal/InstruccionesActa.jsx';
import TuAbogado from '../Pages/Legal/TuAbogado.jsx';
import Activismo from '../Pages/Legal/Activismo.jsx';
import Compras from "../Pages/MarketPlace/Compras.jsx";
import UsuarioPage from '../Pages/Usuarios/UsuarioPage';


import PreRegistroConductor2 from '../components/Taxis/PreRegistroConductor2.jsx';

// ---------- Wrappers (usar useParams) ----------
const EditarContenidoWrapper = () => {
  const { slug } = useParams();
  return <EditarContenido filtros="editar" parametros={slug} />;
};
const EliminarContenidoWrapper = () => {
  const { slug } = useParams();
  return <EliminarContenido filtros="eliminar" parametros={slug} />;
};
const EditarCursoWrapper = () => {
  const { slug } = useParams();
  return <EditarCurso filtros="editar" parametros={slug} />;
};
const EliminarCursoWrapper = () => {
  const { slug } = useParams();
  return <EliminarCurso filtros="eliminar" parametros={slug} />;
};
const EliminarProductoWrapper = () => {
  const { slug } = useParams();
  return <EliminarProducto filtros="eliminar" parametros={slug} />;
};
const WikiWrapper = () => {
  const { slug } = useParams();
  return <WikiViewer slug={slug} />;
};

// Layout para Wiki
const WikiLayout = ({ children }) => (
  <>
    <div style={{ paddingTop: '64px' }}>{children}</div>
  </>
);

const Rutas = () => (
  <Routes>
    {/* RUTAS NORMALES */}
    <Route path="/" element={<HomeRoute />} />
    <Route path="/probador" element={<Probador />} />
    <Route path="/registrar" element={<ReferirAlias />} />

    {/* Callback / Auth */}
    <Route path="/callback" element={<CallbackPage />} />

    {/* Notificaciones */}
    <Route path="/notificaciones" element={<AllNotificaciones />} />
    <Route path="/notificacion/:id" element={<Notificacion />} />

    {/* Gana / GanaRoute */}
    <Route path="/gana" element={<GanaRoute />} />
    

    {/* Taxis */}
    <Route path="/taxis" element={<TaxisRoute />} />
    <Route path="/taxis/conductor/registro" element={<RegistroConductor />} />
    <Route path="/taxis/conductor/preregistro" element={<PreRegistroConductor />} />
    <Route path="/taxis/conductor/esperando" element={<Conductor />} />
    <Route path="/taxis/conductor/requisitos" element={<RequisitosConductor />} />
    <Route path="/taxis/pasajero/registro" element={<RegistroPasajero />} />
    <Route path="/taxis/pasajero/viaje" element={<Pasajero />} />
    <Route path="/taxis/viaje/:travelId" element={<TripView />} />

    {/* Food / Restaurantes */}
    <Route path="/food" element={<RestaurantesRoute />} />
    <Route path="/comida" element={<Food />} />
    <Route path="/restaurantes" element={<RestaurantesRoute />} />

    {/* Market / Marketplace / MarketRoute */}
    <Route path="/market" element={<MarketPlace />} />
    <Route path="/marketplaces" element={<MarketPlace />} />
    <Route path="/market/producto/:slug" element={<Producto />} />
    <Route path="/market/store/:slug" element={<Tienda />}>
      <Route path="agregar-producto" element={<AgregarProducto />} />
      <Route path="pedidos" element={<MisProductos />} />
      <Route path="entregados" element={<PedidosEntregados />} />
      <Route path="productos" element={<AgregarProducto />} />
      <Route path="preguntas-producto" element={<MisProductos />} />
      <Route path="pagos" element={<PagosTienda />} />
      <Route path="configuracion" element={<ConfiguracionTienda />} />
    </Route>
    <Route path="/registro-vendedor" element={<RegistroTienda />} />
    <Route path="/agregar-producto" element={<AgregarProducto />} />
    <Route path="/carrito" element={<Carrito />} />
    <Route path="/carrito/finalizar" element={<FinalizarCompra />} />
    <Route path="/market/compras/*" element={<Compras />} />
    <Route path="/productos/*" element={<ProductosPage />} />
    <Route path="/productos/eliminar/:slug" element={<EliminarProductoWrapper />} />
    <Route path="/productos/eliminar/:slug" element={<EliminarProductoWrapper />} />

    {/* Cartera / OpWallet */}
    <Route path="/cartera/itokens" element={<ITokens />} />
    <Route path="/cartera/FreeBoocks" element={<Catalogo />} />
    <Route path="/cartera/:moneda" element={<OpWalletRoute />} />
    <Route path="/cartera" element={<OpWalletRoute />} />
    <Route path="/comprar-tokens" element={<OpWalletRoute />} />
    
    
    
    
    <Route path="/taxis/preregistrar" element={<PreRegistroConductor2 />} />

    {/* Academia / Coowork */}
    <Route path="/academia" element={<Rompecabezas />} />
    <Route path="/academias" element={<Academia />} />
    <Route path="/academia/taxis" element={<Academia />} />
    <Route path="/coowork" element={<Coowork />} />
    <Route path="/herramientas/mi-agencia" element={<Agencia />} />
    <Route path="/herramientas/agregar-tarea" element={<AgregarTarea />} />

    {/* Perfil / Usuario */}
    <Route path="/perfil/:username" element={<Perfil />} />
    <Route path="/favoritos" element={<Favoritos />} />
    <Route path="/favoritos/*" element={<Favoritos />} />
    <Route path="/miqr" element={<UsuarioPage />} />

    {/* Ubicación */}
    <Route path="/ubicacion" element={<MiUbicacion />} />

    {/* Info / Wiki / Help */}
    <Route path="/wiki" element={<WikiHome />} />
    <Route path="/wiki/:slug" element={<WikiWrapper />} />
    <Route path="/quienes-somos" element={<WikiWrapper />} />
    <Route path="/ayuda" element={<WikiWrapper />} />
    <Route path="/documentacion-transparencia" element={<WikiWrapper />} />
    <Route path="/info/quienes" element={<QuienesSomos />} />
    <Route path="/info/faq" element={<PreguntasFrecuentes />} />
    <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
    <Route path="/ayuda" element={<WikiWrapper />} />

    {/* Eventos */}
    <Route path="/evento/:slug" element={<Evento />} />
    <Route path="/eventos/crear-evento" element={<CrearEvento />} />
    <Route path="/eventos" element={<EventosPage />} />

    {/* Clubs / Bitácoras */}
    <Route path="/club/bitacoras/:registro" element={<RegistroBitacora />} />
    <Route path="/club/bitacora/editar/:registro" element={<EditarRegistroBitacora />} />
    <Route path="/club/bitacora/escribir" element={<EscribirBitacora />} />
    <Route path="/clubs/miclub/*" element={<MiClub />} />
    <Route path="/clubs/:nombre_club" element={<Club />} />
    <Route path="/clubs/requisitos-jardinero" element={<RequisitosJardinero />} />
    <Route path="/clubs/afiliarseclub/:club" element={<AfiliarseClubCultivo />} />
    <Route path="/clubs/agregar-club/cultivo" element={<AgregarClubWrapper tipo="cultivo" />} />
    <Route path="/clubs/tipos-clubs" element={<TiposClubs />} />
    <Route path="/clubs/miclub/qrscanner" element={<QrScanner />} />
    <Route path="/clubs/agregar-club" element={<AgregarClubWrapper />} />
    <Route path="/club-creado" element={<ClubCreado />} />

    {/* Contenidos / Cursos */}
    <Route path="/contenidos/agregar-contenido" element={<AgregarContenido />} />
    <Route path="/cursos/agregar-curso" element={<AgregarCurso />} />
    <Route path="/cursos/editar/:slug" element={<EditarCursoWrapper />} />
    <Route path="/cursos/eliminar/:slug" element={<EliminarCursoWrapper />} />
    <Route path="/cursos/*" element={<CursosPage />} />
    <Route path="/curso/:slug/*" element={<Curso />} />
    <Route path="/contenidos/editar/:slug" element={<EditarContenidoWrapper />} />
    <Route path="/contenidos/eliminar/:slug" element={<EliminarContenidoWrapper />} />
    <Route path="/contenidos/*" element={<ContenidosPage />} />
    <Route path="/contenido/:slug" element={<Contenido />} />

    {/* Membresías */}
    <Route path="/membresias" element={<Membresias />} />
    <Route path="/membresias/cultivo/order" element={<NumeroPlantas />} />
    <Route path="/membresias/jardinero/order" element={<RequisitosJardinero />} />
    <Route path="/membresias/pagar/*" element={<ProbarMembresia />} />
    <Route path="/membresias/pago/plan/:planId" element={<ProbarMembresia />} />
    <Route path="/membresias/adquirir/*" element={<MembershipCheckout />} />
    <Route path="/mi-membresia" element={<MiMembresia />} />
    <Route path="/activatumembresia" element={<ActivaTuMembresia />} />
    <Route path="/humo" element={<Humo />} />

    {/* Admin / Root */}
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/root/*" element={<RootDashboard />} />
    <Route path="/admin/*" element={<AdminDashboard />} />

    {/* Legal */}
    <Route path="/legal" element={<LegalPage />} />
    <Route path="/legal/rutalegal" element={<LegalPage />} />
    <Route path="/legal/misdocumentos" element={<LegalPage />} />
   

    {/* Comunidad */}
    <Route path="/comunidad" element={<ComunidadPage />} />
    <Route path="/comunidad/nuevo-anuncio-programado" element={<Anuncios />} />
    <Route path="/comunidad/mis-anuncios" element={<Anuncios />} />
    <Route path="/comunidad/mis-anuncios/:slug" element={<Anuncios />}>
      <Route path="programados" element={<Anuncios />} />
      <Route path="historial" element={<Anuncios />} />
      <Route path="configuracion" element={<Anuncios />} />
    </Route>
    <Route path="/referir" element={<Referir />} />
    <Route path="/referir/*" element={<Referir />} />
    <Route path="/agregar-club/:club" element={<Referir />} />

    
    {/* Misc / Tests */}
    <Route path="/notificationtester" element={<NotificationTester />} />
    <Route path="/precargador" element={<PreCargador />} />
    <Route path="/prueba" element={<Prueba />} />

    {/* Stripe success */}
    <Route path="/stripe-success/:slug" element={<StripeSuccessRedirect />} />

    {/* Fallbacks / aliases */}
    <Route path="/marketplaces" element={<MarketPlace />} />
    <Route path="/market" element={<MarketPlace />} />
  </Routes>
);

export default Rutas;
