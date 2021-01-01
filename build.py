'''
Script
- fetch all character data from /characters/*.json and place them into file at /src/CharVals.js
- fetch all weapon data from /weapons/*.json and place them into file at /src/WeapVals.js
'''

import glob
import os

src_path = os.getcwd()+'/src'

def read_all(dirpath):
    new_dir_path = os.getcwd()+dirpath
    dat = []
    names = []
    for filename in glob.glob(os.path.join(new_dir_path, '*.json')):
        with open(os.path.join(os.getcwd(), filename), 'r') as f:
            charname = filename.replace(new_dir_path,'').replace('\\','').replace('.json','').capitalize()
            names.append(charname)
            json_str = f.read()
            json_str = "\""+charname +"\": " + json_str
            dat.append(json_str)
            f.close()
    return dat, names

def update_chars():
    '''
        Grab all characters and export to /src/CharVals.js
        Also does *some* formatting
    '''
    chars, charlist = read_all('/characters')
    char_out_file = open((src_path+'/CharVals.js'), 'w')
    char_out_file.write('const CHARINFO = {\n')
    for char in chars:
        char_out_file.write(char)
        char_out_file.write(',\n')
    char_out_file.write('}\n')
    char_out_file.write('const CHARLIST = [\n')
    for name in charlist:
        char_out_file.write('\"'+name+"\", ")
    char_out_file.write(']\n')
    char_out_file.write("export { CHARINFO, CHARLIST }")
    char_out_file.close()

def update_weaps():
    '''
        Grab all weapons and export to /src/WeapVals.js
        Also does *some* formatting
    '''
    weaps = read_all('/weapons')
    weap_out_file = open((src_path+'/WeapVals.js'), 'w')
    weap_out_file.write('const WEAPINFO = {\n')
    for weap in weaps:
        weap_out_file.write(weap)
        weap_out_file.write(',\n')
    weap_out_file.write('}\n')
    weap_out_file.write("export { WEAPINFO }")
    weap_out_file.close()

update_chars()
#update_weaps()
