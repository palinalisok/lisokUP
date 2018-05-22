var postModule = (function(){
	var photoPosts = [
	   {
		id: '1',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-02-23T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   },
	   {
		 id: '2',
		 descriprion: 'This is my photo. I can edit or delete it. This is description. #hashtag',
		 createdAt: new Date('2018-02-24T23:00:00'),
		 author: 'Username',
		 photoLink: 'photo.jpg'
	   },
	   {
		id: '3',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-02-25T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   },
	   {
		id: '4',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-02-26T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   },
	   {
		id: '5',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-02-27T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   },
	   {
		id: '6',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-02-28T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   },
	   {
		id: '7',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-03-01T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   },
	   {
		id: '8',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-03-02T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   },
	   {
		id: '9',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-03-03T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   },
	   {
		id: '10',
		descriprion: 'This is not my photo. I can like it. This is description. #hashtag',
		createdAt: new Date('2018-03-04T23:00:00'),
		author: 'JohnDee',
		photoLink: 'ph2.jpg'
	   }
	   
	];

	function getPhotoPosts (skip, top, filterConfig)
	{
		if (filterConfig.author)
			result = photoPosts.filter(function (a) {
				return a.author == filterConfig.author;
			});

		if (filterConfig.createdAt)
			result = photoPosts.filter(function (a) {
				return a.createdAt == filterConfig.createdAt;
			});

		result.sort(compareDates);
		return result.slice(skip, skip + top);
	}

	function getPhotoPost (id)
	{
		for (var i = 0; i < photoPosts.length; i++)
		{
			if (photoPosts[i].id === id)
				return photoPosts[i];
		}
		return null;
	}

	function validatePhotoPost (photoPost)
	{
		if (photoPost.description !== undefined 
		&& photoPost.description.length <= 200 
		&& photoPost.createdAt !== undefined 
		&& photoPost.author !== undefined 
		&& photoPost.photoLink !== undefined)
		{
			return true;
		}
		else return false;
	}

	
	function addPhotoPosts (photoPost)
	{
		if (this.validatePhotoPost(PhotoPost))
		{
			PhotoPosts.push(PhotoPost);
		}
	}

	function editPhotoPost(id, PhotoPost)
	{
		var post = this.getPhotoPost(id);
		if (post != null) 
		{
			if (photoPost.photoLink !== undefined)
				post.photoLink = photoPost.photoLink;

			if (photoPost.description !== undefined)
				post.description = photoPost.description;

			if (this.validatePhotoPost(photoPost)) 
			{
				return true;
			}
		}	
	}

	function removePhotoPost(id)
	{	
		var post = this.getPhotoPost(id);
		if (post != null)
		{
			var n = PhotoPosts.length;
			var idx = -1;
			for (var i = 0; i < n; i++)
			{
				if (PhotoPosts[i]==post)
				{
					idx = i;
				}
			}
			if (idx!=-1)
			{
				PhotoPosts.splice(idx, 1);
				return true;
			}
			else
			{
				return false;
			}
		}
		
	}
	
	return {
		getPhotoPosts, 
		getPhotoPost, 
		validatePhotoPost,
		addPhotoPosts,
		editPhotoPost,
		removePhotoPost		
	};
})()