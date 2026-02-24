import { Partebaixo } from "./partedasbord/partebaixo";
import { Partecima } from "./partedasbord/partecima";
import "./dasbord.css";

export function Dashbord() {
  return (
    <div className="body">
      <Partecima />
      <Partebaixo />
    </div>
  );
}