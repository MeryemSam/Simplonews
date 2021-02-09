let articleAuthorName = document.querySelector(".authorName")
let articleTitle = document.querySelector(".articleTitle")
let articleText = document.querySelector(".articleText")
let articleResume = document.querySelector(".articleResume")
let articleImage = document.querySelector(".articleImage")

function updateContent(target, newContent, contentType = "text") {
    if (contentType == 'text') {
        target.textContent = newContent
    }
    if (contentType == 'image' || contentType == 'img') {
        target.src = newContent
    }
    console.log("sucessfully updated content")
}


// updateContent(articleAuthorName, "lol", 'text')
// updateContent(articleImage, "assets/images/white-image.png", 'img')