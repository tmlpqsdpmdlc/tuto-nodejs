le but est de copier un fichier volumineux morceau par morceau

on utilise les createReadStream fs.createWriteStream

Pour des fichiers de petite taille, on utilisera fs.writeStream et fs.ReadStream

pour lancer la copie, faire dans la commande: node copy.js