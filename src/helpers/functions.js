function tooltipWhoLiked(liked, likes) {
  let arr
  let count
  if (likes.length) {
    if (likes.length < 4) {
      if (liked) {
        arr = [{ user: 'Você' }]
        arr = arr.concat(likes.slice(0, likes.length - 1))
      } else {
        arr = likes.slice(0, likes.length)
      }
      count = 0
    } else {
      if (liked) {
        arr = [{ user: 'Você' }].concat(likes.slice(0, 2))
      } else {
        arr = likes.slice(0, 3)
      }
      count = likes.length - 2
    }
  } else {
    return {
      tooltip: 'Seja o primeiro a curtir',
      lengthLikesBy: likes.length,
      count: 0,
    }
  }

  let string = ''
  arr.map((e, i) => {
    if (i >= 2) {
      return (string = string + ` e ${count} pessoas também curtiram`)
    }
    if (i > 0) {
      return (string = string + `, ${e.user}`)
    }
    return (string = string + e.user)
  })
  return {
    tooltip: string,
    lengthLikesBy: likes.length,
    count,
  }
}

function separeHashtagsInArray(data) {
  const arrText = data.text.split(' ')
  const hashtags = arrText
    .map((word) => {
      if (word[0] === '#') {
        return word.replace(/[.,;?!#@$%&*()]/gi, '')
      }
      return false
    })
    .filter((value) => value)
  return hashtags
}

export const functionHelper = { tooltipWhoLiked, separeHashtagsInArray }
