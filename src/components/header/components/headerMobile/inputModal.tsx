import { Button, Group, Input, Modal, TextInput } from "@mantine/core";
import { useId, useState } from "react";
import { InputModalInterface } from "../../../../interfaces/header_input.inteface/header_input.inteface";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const InputModal = ({ setOpen }: InputModalInterface) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [seachInputHeader, setSeachInputHeader] = useState("");
  const navigate = useNavigate();

  const id = useId();
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="AnimeVlue"
        style={{ backgroundColor: "#00000061", color: "#000000b2" }}
      >
        <Input.Wrapper
          id={id}
          label="Pesquise"
          style={{ marginBottom: "30px" }}
        >
          <Input
            id={id}
            placeholder="Pesquise..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSeachInputHeader(event.target.value);
            }}
          />
        </Input.Wrapper>
        <Button
          onClick={() => {
            seachInputHeader !== "" && navigate(`/seach/${seachInputHeader}`);
            setOpened(false);
          }}
        >
          Pesquisar
        </Button>
      </Modal>

      <Group position="center">
        <BiSearchAlt
          style={{ width: "40px", height: "40px" }}
          onClick={() => {
            setOpened(true);
            setOpen(false);
          }}
        />
      </Group>
    </>
  );
};
