module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});

// postgres://axbinxtsipthxf:841761ac57c1b9f77a93f0ab47eb8b041edad0b071fc834713aae94880745e98@ec2-34-205-209-14.compute-1.amazonaws.com:5432/d2i0ifsn1ocn9a