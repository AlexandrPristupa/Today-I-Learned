// learn regexp

const encodeCharacters = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

const decodeCharacters = {
    '&amp;'  : '&',
    '&lt;'   : '<',
    '&gt;'   : '>',
    '&quot;' : '"',
    '&#39;'  : "'",
    '&#x2f;' : "/",
    '&#x2F;' : "/",
    '&#x60;' : "`",
    '&#x3D;' : "=",
    '&#x3d;' : "="
};

export const escapeHtml = (string, type) => {

    // if string empty return;
    if (!string) {
        return;
    }

    var RegExp = null;

    if (type === 'edit') {
        RegExp = /(&amp;|&lt;|&gt;|&quot;|&#39;|&#x2f;|&#x2F;|&#x60;|&#x3D;|&#x3d;)/g;
    } else {
        RegExp = /[&<>"'`=\/]/g;
    }

    return String(string).replace(RegExp, function (s) {
        return type === "edit" ? decodeCharacters[s] : encodeCharacters[s];
    });

}
