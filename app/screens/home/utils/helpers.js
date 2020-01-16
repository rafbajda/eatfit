import globalHps from '../../../shared/utils/helpers';

const normalizeScanToCamelCase = scan => {
    console.log('SCAN SCAN', scan);
    const normalizedSubstances = scan.substances
        ? scan.substances.map(sub => globalHps.normalizeKeysToCamelCase(sub))
        : [];
    const normalizedScan = globalHps.normalizeKeysToCamelCase(scan);
    return {
        ...normalizedScan,
        substances: normalizedSubstances
    };
};

const convertUnicode = input => {
    return input.replace(/\\u(\w\w\w\w)/g, (a, b) => {
        const code = parseInt(b, 16);
        return String.fromCharCode(code);
    });
};

export default { normalizeScanToCamelCase, convertUnicode };
