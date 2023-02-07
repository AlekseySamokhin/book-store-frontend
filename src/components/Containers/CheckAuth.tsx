import { useAppSelector } from '../../redux/store';

interface ITypesProps {
  needAuth?: boolean;
  children: React.ReactElement;
}

const CheckAuth: React.FC<ITypesProps> = (props): React.ReactElement | null => {
  const email = useAppSelector((state) => state.auth.user.email);

  if (!email && !props.needAuth) {
    return props.children;
  }

  if (email && props.needAuth) {
    return props.children;
  }

  return null;
};

export { CheckAuth };
