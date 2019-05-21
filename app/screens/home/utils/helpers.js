import globalHps from '../../../shared/utils/helpers';

const normalizeScanToCamelCase = scan => {
    const normalizedSubstances = scan.substances
        ? scan.substances.map(sub => globalHps.normalizeKeysToCamelCase(sub))
        : [];
    const normalizedScan = globalHps.normalizeKeysToCamelCase(scan);
    return {
        ...normalizedScan,
        substances: normalizedSubstances,
    };
};

export default { normalizeScanToCamelCase };
