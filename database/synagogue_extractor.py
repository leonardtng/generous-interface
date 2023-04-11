import csv

fn_in = "./assets_preliminary_listing.csv"
fn_out = "./synagogue_objects.csv"

with open(fn_in, "r") as infile, open(fn_out, 'w+') as outfile:
    # Start csv reader and writer
    csvreader = csv.reader(infile)
    csvwriter = csv.writer(outfile)

    # Write the header row
    header_row = next(csvreader)
    col_count = len(header_row)
    csvwriter.writerow(header_row)

    # Write all rows with location synagogue to output csv
    for row in csvreader:
        if 'synagogue' in row[4].lower():
            row[4]="synagogue"
            csvwriter.writerow(row)

print("finished")