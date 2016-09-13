/**
 * Export Hash
 */

module.exports = Hash

/**
 * Hash
 *
 * @param {Object} object
 * @return {String} string
 */

function Hash (object) {
  return murmur(JSON.stringify(object))
}

/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @return {string} Base 36 encoded hash result
 */
function murmur (str) {
  var l = str.length
  var h = l
  var i = 0
  var k

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24

    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16)
    k ^= k >>> 24
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16)

    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k

    l -= 4
    ++i
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16
      break
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8
      break
    case 1:
      h ^= str.charCodeAt(i) & 0xff
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16)
      break
  }

  h ^= h >>> 13
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16)
  h ^= h >>> 15

  return (h >>> 0).toString(36)
}
