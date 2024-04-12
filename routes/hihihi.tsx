import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Formulario from "../islands/Formulario.tsx";

const Hihihi = (props: PageProps) => {
  const SayHi = useSignal("");

  return (
    <Formulario/>
  );
};

export default Hihihi;