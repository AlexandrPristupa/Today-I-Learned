export const convertHTML = (str) => {
    // &colon;&rpar;

    const encode = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };

    return String(str).replace(/[&<>"'`=\/]/g, function (s) {
        return encode[s];
    });

};
