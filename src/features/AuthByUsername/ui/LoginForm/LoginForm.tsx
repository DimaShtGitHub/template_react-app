import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t('Введите имя пользователя')}
        className={cls.input}
        autoFocus
      />
      <Input
        placeholder={t('Введите пароль')}
        className={cls.input}
      />
      <Button className={cls.btn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
