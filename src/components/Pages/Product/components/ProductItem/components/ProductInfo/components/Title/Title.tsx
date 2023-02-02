interface ITypeProps {
  variant: string;
  className: string;
  text: string;
}

const Title: React.FC<ITypeProps> = (props): JSX.Element | null => {
  if (props.variant === 'h1') {
    return <h1 className={props.className}>{props.text}</h1>;
  }

  if (props.variant === 'h2') {
    return <h2 className={props.className}>{props.text}</h2>;
  }

  if (props.variant === 'h3') {
    return <h3 className={props.className}>{props.text}</h3>;
  }

  if (props.variant === 'h4') {
    return <h4 className={props.className}>{props.text}</h4>;
  }

  return null;
};

export { Title };
