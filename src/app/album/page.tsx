import { PhotoBook } from "@/components/photo-book";

interface GitHubFile {
  name: string;
  download_url: string;
  type: string;
}

async function fetchPhotosFromGitHub(folder: string) {
  const url = `https://api.github.com/repos/ianzren/photos/contents/${folder}`;

  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    console.error(`Failed to fetch photos from ${folder}`);
    return [];
  }

  const files: GitHubFile[] = await response.json();

  return files
    .filter(
      (file) =>
        file.type === "file" && /\.(jpg|jpeg|png|webp|gif)$/i.test(file.name),
    )
    .map((file) => ({
      src: file.download_url,
      alt: file.name.replace(/\.[^/.]+$/, ""),
    }));
}

export default async function AlbumPage() {
  const photos = await fetchPhotosFromGitHub("stock");

  return (
    <main className="flex-1 max-w-4xl">
      <PhotoBook photos={photos} />
    </main>
  );
}
