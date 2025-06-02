import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;

public class LibraryManagementSystem {

    // Book Table Model
    private DefaultTableModel tableModel;

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new LibraryManagementSystem().createMainFrame();
        });
    }

    private void createMainFrame() {
        // Main Frame
        JFrame mainFrame = new JFrame("Library Management System");
        mainFrame.setSize(600, 400);
        mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        mainFrame.setLayout(new BorderLayout());

        // Title
        JLabel title = new JLabel("LIBRARY MANAGEMENT SYSTEM", JLabel.CENTER);
        title.setFont(new Font("Arial", Font.BOLD, 20));
        title.setOpaque(true);
        title.setBackground(Color.LIGHT_GRAY);
        title.setForeground(Color.BLACK);
        mainFrame.add(title, BorderLayout.NORTH);

        // Table Data (Empty at start)
        String[] columns = {"ID", "NAME", "AUTHOR"};
        tableModel = new DefaultTableModel(columns, 0); // 0 rows initially
        JTable bookTable = new JTable(tableModel);
        JScrollPane scrollPane = new JScrollPane(bookTable);
        mainFrame.add(scrollPane, BorderLayout.CENTER);

        // Buttons Panel
        JPanel buttonPanel = new JPanel();
        buttonPanel.setBackground(Color.WHITE); // Background for the button panel

        JButton addButton = new JButton("ADD A BOOK");
        addButton.setBackground(Color.GREEN);
        addButton.setForeground(Color.WHITE);
        addButton.setFont(new Font("Arial", Font.BOLD, 14));

        JButton deleteButton = new JButton("DELETE A BOOK");
        deleteButton.setBackground(Color.RED);
        deleteButton.setForeground(Color.WHITE);
        deleteButton.setFont(new Font("Arial", Font.BOLD, 14));

        buttonPanel.add(addButton);
        buttonPanel.add(deleteButton);
        mainFrame.add(buttonPanel, BorderLayout.SOUTH);

        // Add Book Action
        addButton.addActionListener(e -> createAddBookFrame());

        // Delete Book Action
        deleteButton.addActionListener(e -> createDeleteBookFrame());

        // Show Main Frame
        mainFrame.setVisible(true);
    }

    private void createAddBookFrame() {
        JFrame addFrame = new JFrame("Add a Book");
        addFrame.setSize(400, 300);
        addFrame.setLayout(new GridLayout(4, 2, 10, 10)); // Grid layout with padding

        addFrame.add(new JLabel("Book ID:"));
        JTextField bookIdField = new JTextField();
        addFrame.add(bookIdField);

        addFrame.add(new JLabel("Book Name:"));
        JTextField bookNameField = new JTextField();
        addFrame.add(bookNameField);

        addFrame.add(new JLabel("Book Author:"));
        JTextField bookAuthorField = new JTextField();
        addFrame.add(bookAuthorField);

        JButton saveButton = new JButton("SAVE");
        saveButton.setBackground(Color.green);
        saveButton.setForeground(Color.WHITE);

        JButton cancelButton = new JButton("CANCEL");
        cancelButton.setBackground(Color.RED);
        cancelButton.setForeground(Color.WHITE);

        addFrame.add(saveButton);
        addFrame.add(cancelButton);

        // Save Button Action
        saveButton.addActionListener(e -> {
            String id = bookIdField.getText().trim();
            String name = bookNameField.getText().trim();
            String author = bookAuthorField.getText().trim();

            if (!id.isEmpty() && !name.isEmpty() && !author.isEmpty()) {
                tableModel.addRow(new Object[]{id, name, author});
                JOptionPane.showMessageDialog(addFrame, "Book Added: " + id + " - " + name + " by " + author);
                addFrame.dispose();
            } else {
                JOptionPane.showMessageDialog(addFrame, "Please fill in all fields.", "Error", JOptionPane.ERROR_MESSAGE);
            }
        });

        // Cancel Button Action
        cancelButton.addActionListener(e -> addFrame.dispose());

        addFrame.setVisible(true);
    }

    private void createDeleteBookFrame() {
        JFrame deleteFrame = new JFrame("Delete a Book");
        deleteFrame.setSize(400, 200);
        deleteFrame.setLayout(new GridLayout(2, 2, 10, 10)); // Grid layout with padding

        deleteFrame.add(new JLabel("Enter Book ID:"));
        JTextField deleteIdField = new JTextField();
        deleteFrame.add(deleteIdField);

        JButton proceedButton = new JButton("PROCEED");
        proceedButton.setBackground(Color.GREEN);
        proceedButton.setForeground(Color.WHITE);

        JButton cancelButton = new JButton("CANCEL");
        cancelButton.setBackground(Color.RED);
        cancelButton.setForeground(Color.WHITE);

        deleteFrame.add(proceedButton);
        deleteFrame.add(cancelButton);

        // Proceed Button Action
        proceedButton.addActionListener(e -> {
            String id = deleteIdField.getText().trim();
            if (!id.isEmpty()) {
                boolean bookFound = false;

                // Search for the book ID in the table and remove it
                for (int i = 0; i < tableModel.getRowCount(); i++) {
                    if (tableModel.getValueAt(i, 0).equals(id)) {
                        tableModel.removeRow(i);
                        JOptionPane.showMessageDialog(deleteFrame, "Book with ID " + id + " deleted.");
                        bookFound = true;
                        break;
                    }
                }

                if (!bookFound) {
                    JOptionPane.showMessageDialog(deleteFrame, "Book with ID " + id + " not found.", "Error", JOptionPane.ERROR_MESSAGE);
                }

                deleteFrame.dispose();
            } else {
                JOptionPane.showMessageDialog(deleteFrame, "Please enter a valid Book ID.", "Error", JOptionPane.ERROR_MESSAGE);
            }
        });

        // Cancel Button Action
        cancelButton.addActionListener(e -> deleteFrame.dispose());

        deleteFrame.setVisible(true);
    }
}