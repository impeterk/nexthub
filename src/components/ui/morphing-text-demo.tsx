import { MorphingText } from "@/components/magicui/morphing-text";

const texts = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "React",
  "Component",
  "Smooth",
  "Transition",
  "Engaging",
];

export default function MorphingTextDemo() {
  return (
    <MorphingText
      texts={texts}
      className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
    />
  );
}
