import { useAppSelector } from '@/redux/store';

interface ITypeProps {
  needAuth?: boolean;
  children: React.ReactElement;
}

const CheckAuth: React.FC<ITypeProps> = (props) => {
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
