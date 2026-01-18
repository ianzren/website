import { AlbumSection } from "@/components/album-section";

export default function TripsPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto">
      <div className="mb-16">
        <h1 className="mb-8">Photo Album</h1>
      </div>

      <div className="mb-24 w-full h-px bg-gray-200" />

      <div className="space-y-24">
        <AlbumSection
          title="Morocco Autumn 2025"
          images={[
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768778838/IMG_6637_oqvf9t.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768778839/IMG_6611_hx6gqj.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768778838/IMG_6680_dn3mny.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768778838/IMG_6604_armqtb.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768778837/BF50CB38-0055-443F-85A7-419AF95C72C2_d28o0m.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768778838/IMG_6580_oob4fs.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768778838/IMG_6587_vofbnw.jpg",
            },
          ]}
        />

        <div className="w-full h-px bg-gray-200" />

        <AlbumSection
          title="San Sebastián Autumn 2025"
          images={[
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768779561/IMG_6319_zpr63a.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768779562/IMG_6313_i5rxaj.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768779562/IMG_6292_vokhjf.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768779561/IMG_6333_euz8dv.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768779562/IMG_6321_nx3jjm.jpg",
            },
            {
              src: "https://res.cloudinary.com/dutaw2j5h/image/upload/v1768779561/IMG_6347_vbfgrc.jpg",
            },
          ]}
        />

        <div className="w-full h-px bg-gray-200" />

        <AlbumSection
          title="Paris Autumn 2025"
          images={[
            {
              src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=700",
              alt: "Kirkjufell mountain",
            },
          ]}
        />

        <div className="w-full h-px bg-gray-200" />

        <AlbumSection
          title="Hong Kong Summer 2025"
          images={[
            {
              src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
              alt: "Torres del Paine peaks",
            },
          ]}
        />

        <div className="w-full h-px bg-gray-200" />

        <AlbumSection
          title="Hong Kong Summer 2025"
          images={[
            {
              src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
              alt: "Torres del Paine peaks",
            },
          ]}
        />
      </div>
    </main>
  );
}
