function titleCase(str) {
    words = str.toLowerCase().split(' ')

    final ;
    for(i=0;i<words.length;i++)
        {
          final += words[i][0].toUpperCase();

        }

    return final;

}

module.exports = titleCase;
