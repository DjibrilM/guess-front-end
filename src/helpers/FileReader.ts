
export const dropIMages = (data: any, imageElement: string, droped: Function) => {
    [...data].forEach(item => {
        if (item.kind === 'file') {
            const getImage = document.querySelector(".selectedImage") as HTMLImageElement;
            const file = item.getAsFile();
            const reader:FileReader | any = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const getImage:any = document.querySelector('.' + imageElement) as HTMLImageElement;

                if (reader.result.includes("image")) {
                    getImage.src = reader.result;
                    droped(file)
                }
            }
        }
    });
}

export const previewUploadedImage = (file: any, imageElement: string, done: Function) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const getImage:any = document.querySelector('.' + imageElement) as HTMLImageElement;

        getImage.src = reader.result;
        if (getImage.src.includes("image")) {
            done(file);
        }
    }
}