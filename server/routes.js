const express = require('express');
const cinepiController = require('./controller');

const router = express.Router();

// Recording
router.post('/recording', async (req, res) => {
  const { on } = req.body;
  await cinepiController.setRecording(on);
  res.json({ on });
});
router.get('/recording', async (req, res) => {
  const on = await cinepiController.getRecording();
  res.json({ on });
});

// ISO
router.post('/iso', async (req, res) => {
  const { iso } = req.body;
  await cinepiController.setIso(iso);
  res.json({ iso });
});
router.get('/iso', async (req, res) => {
  const iso = await cinepiController.getIso();
  res.json({ iso });
});

// Height
router.post('/height', async (req, res) => {
  const { height } = req.body;
  await cinepiController.setHeight(height);
  res.json({ height });
});
router.get('/height', async (req, res) => {
  const height = await cinepiController.getHeight();
  res.json({ height });
});

// Width
router.post('/width', async (req, res) => {
  const { width } = req.body;
  await cinepiController.setWidth(width);
  res.json({ width });
});
router.get('/width', async (req, res) => {
  const width = await cinepiController.getWidth();
  res.json({ width });
});

// AWB
router.post('/awb', async (req, res) => {
  const { on } = req.body;
  await cinepiController.getAwb(on);
  res.json({ on });
});
router.get('/awb', async (req, res) => {
  const on = await cinepiController.getAwb();
  res.json({ on });
});

// framerate
router.post('/framerate', async (req, res) => {
  const { fps } = req.body;
  await cinepiController.setFramerate(fps);
  res.json({ fps });
});
router.get('/framerate', async (req, res) => {
  const fps = await cinepiController.getFramerate();
  res.json({ fps });
});

// Color Gains
router.post('/colorGains', async (req, res) => {
  const { red, blue } = req.body;
  const cg_rb = `${red},${blue}`;
  await cinepiController.setColorGains(cg_rb);
  res.json({ red, blue });
});
router.get('/colorGains', async (req, res) => {
  const cg_rb = await cinepiController.getColorGains();
  const [red, blue] = cg_rb.split(',');
  res.json({ red, blue });
});

// shutter angle
router.post('/shutterAngle', async (req, res) => {
  const { angle } = req.body;
  await cinepiController.getShutterAngle(angle);
  res.json({ angle });
});
router.get('/shutterAngle', async (req, res) => {
  const angle = await cinepiController.getShutterAngle();
  res.json({ angle });
});

// shutter speed
router.post('/shutterSpeed', async (req, res) => {
  const { speed } = req.body;
  await cinepiController.setShutterSpeed(speed);
  res.json({ speed });
});
router.get('/shutterSpeed', async (req, res) => {
  const speed = await cinepiController.getShutterSpeed();
  res.json({ speed });
});

module.exports = router;
