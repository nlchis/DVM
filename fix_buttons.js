const fs = require('fs');
const path = 'D:/VietMec/docs/order-tracking/srs/prototypes/order-tracking-prototype.html';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/<button(?=\s|>)(?![^>]*\btype=)/gi, '<button type="button"');

content = content.replace(/<button(?![^>]*\baria-label=)([^>]*)>([\s\S]*?)<\/button>/gi, function(match, attrs, inner) {
    if (!inner.replace(/<[^>]*>/g, '').trim()) {
        return '<button aria-label="Button"' + attrs + '>' + inner + '</button>';
    }
    return match;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed buttons properly.');
