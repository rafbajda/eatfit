import React from 'react';
import emojis from '../../../shared/constants/emojis';
import {
    LegendDescription,
    LegendHeader,
    LegendIcon,
    LegendIconDescriptionHeader,
    LegendListElement,
    LegendRow
} from '../styles/legendStyles';
import I18n from 'i18n-js';

const Legend = () => {
    const {
        veryBadImpact,
        badImpact,
        neutralImpact,
        goodImpact,
        veryGoodImpact,
        t
    } = {
        ...emojis,
        ...I18n
    };
    const list = [
        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.veryGoodImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{veryGoodImpact}</LegendIcon>
        },
        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.prettyGoodImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{goodImpact}</LegendIcon>
        },

        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.ratherNeutralImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{neutralImpact}</LegendIcon>
        },
        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.prettyBadImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{badImpact}</LegendIcon>
        },
        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    {t('info.veryBadImpact')}
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{veryBadImpact}</LegendIcon>
        }
    ];
    return (
        <LegendRow>
            <LegendHeader>{t('labels.instruction')}</LegendHeader>
            <LegendDescription>
                {t('info.instructionDetails')}
            </LegendDescription>
            {list.map((l, i) => (
                <LegendListElement
                    key={i}
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
