import { useGLTF, Center } from "@react-three/drei";

type Props = {
  url: string;
};

export default function ModelViewer({ url }: Props) {
  const { scene } = useGLTF(url);

  return (
    <Center>
      <primitive object={scene} rotation={[1.5, Math.PI/160, 0]} />
    </Center>
  );
}