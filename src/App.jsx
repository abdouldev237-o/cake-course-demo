import React, { useState } from "react";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import VideosPage from "./pages/VideosPage";
import CodesPage from "./pages/CodesPage";
import StudentsPage from "./pages/StudentsPage";
import PaymentsPage from "./pages/PaymentsPage";
import PDFPage from "./pages/PDFPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { Modal, Button, Toast } from "./components/UI";
import { Ticket, Copy, CheckCircle2 } from "lucide-react";

export default function App() {
 const [page,setPage]=useState("Tableau de bord"); const [search,setSearch]=useState(""); const [modal,setModal]=useState(""); const [student,setStudent]=useState(""); const [course,setCourse]=useState("Gâteau au Chocolat"); const [code,setCode]=useState(""); const [toast,setToast]=useState("");
 const notify=message=>{setToast(message);window.clearTimeout(window.__cakeToast);window.__cakeToast=window.setTimeout(()=>setToast(""),2800);};
 const generate=()=>{setCode(`CAKE-${Math.floor(1000+Math.random()*9000)}-${String.fromCharCode(65+Math.floor(Math.random()*26))}`);};
 const copy=async()=>{try{await navigator.clipboard.writeText(code);notify("Code copié !");}catch{notify(code);}};
 const shared={query:search,notify};
 let content;
 switch(page){
  case "Mes vidéos":content=<VideosPage {...shared}/>;break;
  case "Mes codes d'accès":content=<CodesPage {...shared}/>;break;
  case "Mes élèves":content=<StudentsPage {...shared}/>;break;
  case "Mes paiements":content=<PaymentsPage {...shared}/>;break;
  case "Mes PDF":content=<PDFPage {...shared}/>;break;
  case "Paramètres":content=<SettingsPage {...shared}/>;break;
  case "Profil propriétaire":content=<ProfilePage {...shared}/>;break;
  default:content=<DashboardPage setPage={setPage} setModal={setModal}/>;
 }
 return <><Layout page={page} setPage={setPage} search={search} setSearch={setSearch}>{content}</Layout>{modal==="code"&&<Modal title="Générer un code d'accès" onClose={()=>{setModal("");setCode("");}}>{!code?<><p className="modal-description">Créez un accès privé pour une élève de votre académie.</p><div className="form-stack"><label>Formation<select value={course} onChange={e=>setCourse(e.target.value)}><option>Gâteau au Chocolat</option><option>Layer Cake Anniversaire</option><option>Cupcakes Élégants</option><option>Wedding Cake Chic</option></select></label><label>Nom de l'élève (facultatif)<input value={student} onChange={e=>setStudent(e.target.value)} placeholder="Ex. Marie Djoumessi"/></label><Button onClick={generate}><Ticket size={16}/> Générer le code</Button></div></>:<div className="generated-box"><span className="success-orb"><CheckCircle2/></span><h3>Code généré avec succès !</h3><p>{course} · {student||"Élève non attribuée"}</p><div className="generated-code">{code}<button onClick={copy}><Copy size={16}/></button></div><small>Démo locale : branchez cette action à votre API Django pour créer un vrai code.</small><Button onClick={()=>{setModal("");setCode("");setStudent("");}}>Terminer</Button></div>}</Modal>}<Toast message={toast}/></>;
}