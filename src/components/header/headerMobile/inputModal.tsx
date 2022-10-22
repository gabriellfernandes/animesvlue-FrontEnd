import { Button, Group, Input, Modal } from "@mantine/core";
import { useId, useState } from "react";
import { InputModalInterface } from "../../../interfaces/header_input.inteface/header_input.inteface";
import { BiSearchAlt } from "react-icons/bi";


export const InputModal = ({ setOpen }: InputModalInterface) => {
  const [opened, setOpened] = useState<boolean>(false);
  

  const id = useId();
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="AnimeVlue" style={{backgroundColor: "#00000061", color: "#000000b2"}}>
        <Input.Wrapper id={id} label="Pesquise" style={{marginBottom: "30px"}}>
          <Input id={id} placeholder="Pesquise..." />
        </Input.Wrapper>
        <Button>Pesquisar</Button>
      </Modal>

      <Group position="center">
        <BiSearchAlt
          style={{ width: "40px", height: "40px" }}
          onClick={() => {
            setOpened(true) 
            setOpen(false)}}
        />
      </Group>
    </>
  );
};
