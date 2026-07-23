const fs = require('fs');
const path = 'D:/VietMec/docs/order-tracking/srs/prototypes/order-tracking-prototype.html';
let content = fs.readFileSync(path, 'utf8');

// fix stray </button>
content = content.replace('Xóa</button>\r\n                                </button>', 'Xóa\r\n                                </button>');
content = content.replace('Xóa</button>\n                                </button>', 'Xóa\n                                </button>');

// fix &
content = content.replace(/Q&A/g, 'Q&amp;A');
content = content.replace(/Chính sách & Quy ð?nh/g, 'Chính sách &amp; Quy ð?nh');

// find any & followed by space and something else that could trigger raw &
content = content.replace(/ & /g, ' &amp; ');
content = content.replace(/H?i ðáp & H? tr?/g, 'H?i ðáp &amp; H? tr?');

// remove trailing whitespaces
content = content.split('\n').map(line => line.replace(/\s+$/, '')).join('\n');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed syntax and trailing whitespace.');
