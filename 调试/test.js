function showPages(page, total, show) {
  var str = '';
  if (page < show + 1) {
    for (var i = 1; i <= show * 2 + 1; i++) {
      str = str + ' ' + i;
    }
  } else if (page > total - show) {
    for (var i = total - show * 2; i <= total; i++) {
      str = str + ' ' + i;
    }
  } else {
    for (var i = page - show; i <= page + show; i++) {
      str = str + ' ' + i;
    }
  }

  return str.trim();
}

var total = 30;
for (var i = 1; i <= total; i++) {
  console.log(i, showPages(i, total, 2));
}