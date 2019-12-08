const moment = require('moment'); // формат даты
const multer = require('multer'); // для записи файлов

// Фильтрация картинок на тип
const fileFilter = (request, file, callback) => {
    const validFileType = file.mimeType === 'image/png' || file.mimeType === 'image/jpeg';

    if (validFileType) { // проверка на тип картинки
      return callback(null, true);
    }

    return callback(null, false);
};

const limits = {
  fileSize: 5 * 1024 * 1024
};

// Для записи файлов
const storage = multer.diskStorage({
    destination(request, file, callback) {
        callback(null, 'uploads/') // необходимо руками создать папку
        // null - нет ошибок
    },
    filename(request, file, callback) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        callback(null, `${date}-${file.originalname}`);
    }
});

module.exports = multer({fileFilter, limits, storage});