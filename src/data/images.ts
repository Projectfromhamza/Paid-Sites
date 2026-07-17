/**
 * Temporary online placeholders (Unsplash).
 * Local files in /public/images/ are preferred; missing ones fall back to remote URLs.
 */
export const PREFER_LOCAL = true

export const remoteImages: Record<string, string> = {
  '/images/01-hero.jpg':
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80',
  '/images/02-texture-steel.jpg':
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
  '/images/03-texture-wood.jpg':
    'https://images.unsplash.com/photo-1589939705384-5187936ab3e3?auto=format&fit=crop&w=1920&q=80',
  '/images/06-weld-gates.jpg':
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  '/images/07-weld-grills.jpg':
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  '/images/08-weld-structural.jpg':
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
  '/images/09-weld-custom.jpg':
    'https://images.unsplash.com/photo-1535813547-99c456a41d42?auto=format&fit=crop&w=1200&q=80',
  '/images/10-weld-repair.jpg':
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
  '/images/11-weld-railings.jpg':
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  '/images/12-wood-doors.jpg':
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  '/images/13-wood-windows.jpg':
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
  '/images/14-wood-cabinets.jpg':
    'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80',
  '/images/15-wood-furniture.jpg':
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
  '/images/16-wood-frames.jpg':
    'https://images.unsplash.com/photo-1615876235081-695ce5714c5a?auto=format&fit=crop&w=1200&q=80',
  '/images/17-wood-custom.jpg':
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  '/images/18-project-1.jpg':
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
  '/images/19-project-2.jpg':
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  '/images/20-project-3.jpg':
    'https://images.unsplash.com/photo-1581094794329-adb7d0c0b0ad?auto=format&fit=crop&w=1600&q=80',
  '/images/21-process-measure.jpg':
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
  '/images/22-process-design.jpg':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  '/images/23-process-fabricate.jpg':
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
  '/images/24-process-install.jpg':
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  '/images/25-about-workshop.jpg':
    'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1600&q=80',
  '/images/26-about-detail.jpg':
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
  '/images/27-carousel-1.jpg':
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80',
  '/images/28-carousel-2.jpg':
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
  '/images/29-carousel-3.jpg':
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
  '/images/30-carousel-4.jpg':
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80',
}

/** Resolve path for <img> / CSS backgrounds */
export function img(localPath: string): string {
  if (PREFER_LOCAL) return localPath
  return remoteImages[localPath] ?? localPath
}
