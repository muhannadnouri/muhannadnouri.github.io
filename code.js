//
// This is just a stub for a function you need to implement!
//
function getStats(txt) {
    let result = {
        nChars: getNChars(txt),
        nWords: getNWords(txt),
        nLines: getNLines(txt),
        nNonEmptyLines: getnNonEmptyLines(txt),
        maxLineLength: getMaxLineLength(txt),
        averageWordLength: getAverageWordLength(txt),
        palindromes: getPalindromes(txt),
        longestWords: getLongestWords(txt),
        mostFrequentWords: ["hello(7)", "world(1)"]
    }

    return result;
}


function getNChars(txt) {
    // DONE
    return txt.length;
}

function getNWords(txt) {
    // DONE
    var words = txt.match(/[0-9a-z]+/gi).length;

    return words;
}

function getNLines(txt) {
    // DONE
    return txt.split("\n").length;

    //  ALTERNATIVE IMPLEMENTATION:
    //var nLines = txt.split(/\r\n|\r|\n/).length;
    //return nLines;
}

function getnNonEmptyLines(txt) {
    // DONE
    var nNonEmptyLines = (txt.match(/^\s*\S/gm)).length;

    return nNonEmptyLines;
}

function getAverageWordLength(txt) {
    // DONE
    var words = txt.match(/[0-9a-z]+/gi);

    var lengthTotal = 0;
    for (var i = 0; i < words.length; i++) {
        lengthTotal = lengthTotal + words[i].length;
    }

    average = lengthTotal / words.length;
    return average;
}

function getMaxLineLength(txt) {
    // TO-DO: Implement         <-- DONE
    // TO-DO: Comment my code   <-- DONE
    var maxLineLength = 0;
    var currentLargestLength = 0;

    // Step 1 - Go through the entire input string
    var i = 0;
    while(i < txt.length)
    {
        // Step 2 - Gather the current line's length
        if (txt[i] === '\n')
        {
            // If (You have reached end of line) && currentLargestLength is > maxLineLength
            //      Then (make maxLineLength the currentLargestLength)
            if (currentLargestLength > maxLineLength)
            {
                maxLineLength = currentLargestLength;
            }
            // In that case, start currentLargestLength over from 0 && go through the next line
            currentLargestLength = 0;
        }
        else
        {
            // Step 3 - Keep iterating through the string until you find new-line character
            currentLargestLength++;
        }

        // Step 4 - Increment variable until end of the string reached to check the entire input
        i++;
    }

    // Step 5 - If (the entire input string was just one line)...
    //          Then (make maxLineLength the currentLargestLength)
    if (currentLargestLength > maxLineLength)
    {
        maxLineLength = currentLargestLength;
    }

    // Finally, return the maxLineLength
    return maxLineLength;
}

function getPalindromes(txt) {
    // TO-DO: Implement     <-- DONE

    var words = txt.match(/[0-9a-z]+/gi);
    var palindromeList = [];

    var i = 0;
    while(i < words.length)
    {
        words[i] = words[i].toLowerCase();

        if(words[i].length < 3)
        {
            // do nothing
        }
        else if( (words[i] === words[i].split("").reverse().join("")) === true )
        {
            palindromeList.push(words[i]);
        }

        i++;
    }

    return palindromeList;
}

function getLongestWords(txt) {
    // TO-DO: Implement     <-- Incomplete! Returns only the longest string!
    var words = txt.match(/[0-9a-z]+/gi);
    var longestWord = [];

    longestWord = words.sort(function(a, b) {return b.length - a.length});

    return longestWord[0].toLowerCase();
}