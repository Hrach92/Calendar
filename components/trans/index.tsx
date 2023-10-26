import useTranslation from "../../hooks/useTranslation";

type TransTypes = {
  word: string;
};
const Trans = ({ word }: TransTypes) => {
  const { t } = useTranslation();
  return <>{t(word)}</>;
};
export default Trans;
