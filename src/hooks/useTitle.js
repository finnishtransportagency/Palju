import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const useTitle = folder => {
  const [title, setTitle] = useState('');
  const [heading, setHeading] = useState('');
  const { t } = useTranslation();
  // TODO refactor title creation to new custom hook
  useEffect(() => {
    //var title = folder ? `${folder} - ${t('heading')}` : `${t('heading')}`;
    var title = `${folder ?? t('heading')}`;
    if(title === 'palju') {
      title = `${t('heading')}`;
    }
    title = title.replace('palju','');

    document.title = title;
    setHeading(title);
  }, [ folder, t ]);
  return {
    title,
    heading
  }
};