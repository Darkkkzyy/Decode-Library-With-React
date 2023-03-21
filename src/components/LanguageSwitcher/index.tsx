import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  languages: string[];
}

const LanguageSwitcher = ({ languages }: LanguageSwitcherProps) => {
  const {t, i18n } = useTranslation();

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage).catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <div>
      <label htmlFor="language-select" className="hidden">{t('language')}</label>
      <select id="language-select" className="bg-[#252525] text-white border-none focus:outline-none" value={i18n.language} onChange={handleChangeLanguage}>
        {languages.map((lang) => (
          <option className="text-white" key={lang} value={lang} data-icon={`./flags/${lang}.svg`}>
          {lang.toUpperCase()}
        </option>
        ))}
      </select>
    </div>
    </>
  );
};

export default LanguageSwitcher;
