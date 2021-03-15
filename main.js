function decode_msteams_url(url) {
  const decoded_url = decodeURIComponent(url);

  const split1 = decoded_url.split("&");

  if (split1[0].indexOf("google.com") > -1) {
    const split2 = split1[0].split("q=");
    if (split2.length >= 2) {
      return split2[1];
    } else {
      print_error("Something went wrong!. check your url");
      return -1;
    }
  } else {
    return split1[0];
  }
}

function main() {
  const args = process.argv.splice(2);
  if (args.length <= 0) {
    print_error("url required");
  } else {
    if (args.length >= 2)
      print_warning("only one parameter required. ignoring others");
    print_success(decode_msteams_url(args[0]));
  }
  return;
}

function print_success(msg) {
  console.log(`\x1b[32m[✔] ${msg}\x1b[0m`);
}

function print_error(msg) {
  console.log(`\x1b[31m[✘] ${msg}\x1b[0m`);
}

function print_warning(msg) {
  console.log(`\x1b[33m[•] ${msg}\x1b[0m`);
}

// calling
main();
