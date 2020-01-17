import I18n from 'i18n-js';
import * as Localization from 'expo-localization';

import en from '../../assets/i18n/translations/en-US';
import pl from '../../assets/i18n/translations/pl';

I18n.locale = Localization.locale;
I18n.fallbacks = true;
I18n.translations = {
    en,
    pl
};

export default I18n;
