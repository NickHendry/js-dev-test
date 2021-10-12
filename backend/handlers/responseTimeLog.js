function logResponseTime(req, res, next) {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;

    if (process.env.NODE_ENV == 'development') {
      if (elapsedTimeInMs > 300) {
        console.log("\x1b[34m%s\x1b[0m - \x1b[32m%s\x1b[0m : \x1b[31m%fms\x1b[0m", req.method, req.originalUrl, elapsedTimeInMs);
      } else {
        console.log("\x1b[34m%s\x1b[0m - \x1b[32m%s\x1b[0m : \x1b[36m%fms\x1b[0m", req.method, req.originalUrl, elapsedTimeInMs);
      }
    } else if (process.env.NODE_ENV == 'production') {
      var request = "Req: " + req.originalUrl;
      var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log(`${ip} - ${request} - ${elapsedTimeInMs}`);
    }
  });

  next();
}

module.exports = logResponseTime;