import React from 'react';
import I18n from 'i18n-js';
import emojis from '../../../shared/constants/emojis';
import {
    LegendDescription,
    LegendHeader,
    LegendIcon,
    LegendIconDescriptionHeader,
    LegendListElement,
    LegendRow
} from '../styles/legendStyles';

const Legend = () => {
    const { veryBadImpact, badImpact, neutralImpact, goodImpact, veryGoodImpact, t } = {
        ...emojis,
        ...I18n
    };
    const list = [
        {
            id: 0,
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.veryGoodImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{veryGoodImpact}</LegendIcon>
        },
        {
            id: 1,
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.prettyGoodImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{goodImpact}</LegendIcon>
        },

        {
            id: 2,
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.ratherNeutralImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{neutralImpact}</LegendIcon>
        },
        {
            id: 3,
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.prettyBadImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{badImpact}</LegendIcon>
        },
        {
            id: 4,
            rightElement: (
                <LegendIconDescriptionHeader>{t('info.veryBadImpact')}</LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{veryBadImpact}</LegendIcon>
        }
    ];
    return (
        <LegendRow>
            <LegendHeader>{t('labels.instruction')}</LegendHeader>
            <LegendDescription>{t('info.instructionDetails')}</LegendDescription>
            {list.map(l => (
                <LegendListElement
                    key={l.id}
                    leftElement={l.leftElement}
                    rightElement={l.rightElement}
                    bottomDivider
                    topDivider
                />
            ))}
        </LegendRow>
    );
};

export default Legend;
