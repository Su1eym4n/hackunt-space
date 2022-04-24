import TypeAnimation from 'react-type-animation';

const TypeAnim = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={['React typing animation based on typical', 1000, '']}
      wrapper="h2"
    />
  );
};

export default TypeAnim
