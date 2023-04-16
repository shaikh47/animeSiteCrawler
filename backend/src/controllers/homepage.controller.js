const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { homepageService } = require('../services');

const concatenate = catchAsync(async (req, res) => {
  const { num1, num2 } = req.query;
  console.log(req.query)
  const result = await homepageService.concatenate(num1, num2);
  res.status(httpStatus.OK).json({ result });
});

const searchAnime = catchAsync(async (req, res) => {
  const { animeName } = req.query;
  console.log(req.query)
  const result = await homepageService.searchAnime(animeName);
  res.status(httpStatus.OK).json({ result });
});

module.exports = {
  concatenate,
  searchAnime
};