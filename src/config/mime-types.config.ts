export abstract class MimeTypesConfig {
  static MimeTypes: any = {
    msExcel: {
      name: 'msExcel',
      ext: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
      size: 5000000,
      possibleExtensions: ['xlsx', 'xls']
    },
    octetStream: {
      name: 'octetStream',
      ext: ['application/octet-stream'],
      size: 1025000000,
      possibleExtensions: ['dbf'],
      isGenericMimeType: true
    },
    jpeg: {
      name: 'jpeg',
      ext: ['image/jpeg'],
      size: 3000000,
      possibleExtensions: ['jpeg', 'jpg']
    },
    png: {
      name: 'png',
      ext: ['image/png'],
      size: 3000000,
      possibleExtensions: ['png']
    },

    pdf: {
      name: 'pdf',
      ext: ['application/pdf'],
      size: 5000000,
      possibleExtensions: ['pdf']
    },

    plain: {
      name: 'plain',
      ext: ['text/plain'],
      size: 50000000,
      possibleExtensions: ['txt']
    },
    zip: {
      name: 'zip',
      ext: ['application/zip'],
      size: 5000000,
      possibleExtensions: ['zip']
    },
    tiff: {
      name: 'tiff',
      ext: ['image/tiff'],
      size: 5000000,
      possibleExtensions: ['tiff']
    },
    dbf: {
      name: 'dbf',
      ext: ['application/x-dbf','application/octet-stream'],
      size: 1025000000,
      possibleExtensions: ['dbf']
    }
  };
  static genericTypes: Array<string> = ['dbf'];
}
