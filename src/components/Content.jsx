import React from 'react';

const Content = () => {
  return (
    <>
      <div className='w-[70%] m-auto'>
        <h1 className='text-11xl font-extrabold'>{"English Open Word List (EOWL) "}</h1>
        <p>The “English Open Word List” (EOWL) was developed by Ken Loge, but is almost entirely derived from the “UK Advanced Cryptics Dictionary” (UKACD) Version 1.6, by J Ross Beresford. The original copyright document for the UKACD can be found here.

          As a developer of word games or spelling checkers you may find few public domain word lists available that are well-maintained and thorough. The “UK Advanced Cryptics Dictionary” is an excellent and comprehensive word list, but it isn’t particularly well-suited for certain Scrabble™ style computer word games. I created the EOWL for this purpose.

          The EOWL currently contains about 128,985 words. To make EOWL more usable for computer word games all words longer than 10 letters were removed from the UKACD source list, and all proper nouns and words requiring diacritical symbols, hyphens, and apostrophes were removed. This makes it much like the standard ENABLE word list, but EOWL is somewhat smaller (by 44,000 words or so) since it contains no words longer than 10 characters. I separated the original single word list document into 26 individual files to make it easier to work with and added select words from the “Scrabble™ Players Dictionary, Third Edition™ 1995, ISBN 0-87779-220-8.”

          The current distribution of words for each letter in EOWL is listed side.</p>
      </div>
    </>
  );
};

export default Content;