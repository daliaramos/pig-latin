SPECS:
on input lowercase everything
  input example: HEY
  output example: hey

break the string into an array
  input example: the dog barks.
  output example: the, dog, barks, .,

ignore non-alphabetical characters
  input example: 1
  output example: true

add way to single character words
  input example: a
  output example: ay

recognizes words that begin with vowels
  input example: ear
  output example: earway

recognizes words that vbegin with consonants
  input example: zebra
  output example: ebrazay

recognizes multiple consonant beginnings
  input example: squeal
  output example: ealsquay

converts multi-word sentences
  input example: go away
  output examples: ogay awaway

preserves punctuation
  input example: A dog barks.
  output example: ay ogday arksbay.
