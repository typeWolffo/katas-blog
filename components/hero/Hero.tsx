import { Input } from "../input";

type Props = {
  heroHeading: string;
  heroBody: string;
};
function Hero(props: Props) {
  const { heroBody, heroHeading } = props;

  return (
    <div className="hero">
      <div className="hero__header">
        <h1 className="hero__header-heading">{heroHeading}</h1>
        <p className="hero__header-body">{heroBody}</p>
      </div>
      <Input />
    </div>
  );
}
export default Hero;
