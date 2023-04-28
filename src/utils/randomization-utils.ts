export abstract class RandomizationUtils {
  public static generateUniqueId(len = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < len; i++) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }

  public static generateOTP(): string {
    const len = 6;
    const charSet = '123456789';
    let randomString = '';
    for (let i = 0; i < len; i++) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }

  public static generatePassword(): string {
    const obj: any = {
      smallCharSet: 'abcdefghijklmnopqrstuvwxyz',
      capitalCharSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbersSet: '0123456789',
      specialChar: '$%@&^#*&@'
    };
    let randomString = '';
    for (const key in obj) {
      for (let i = 0; i < 2; i++) {
        const randomPoz = Math.floor(Math.random() * obj[key].length);
        randomString += obj[key].substring(randomPoz, randomPoz + 1);
      }
    }

    const randomStringArray = randomString.split('');
    let currentIndex = randomString.length;
    let temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = randomString[currentIndex];
      randomStringArray[currentIndex] = randomString[randomIndex];
      randomStringArray[randomIndex] = temporaryValue;
    }
    return randomStringArray.join('');
  }
}
