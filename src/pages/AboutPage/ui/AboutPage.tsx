import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t("О сайте")}
      {t("Новый")}
    </div>
  );
};

export default AboutPage;
